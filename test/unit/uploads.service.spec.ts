import { Test, TestingModule } from '@nestjs/testing';

import { UploadsService } from '../../src/modules/uploads/uploads.service';
import { CloudinaryService } from '../../src/modules/uploads/cloudinary.service';

describe('UploadsService', () => {
  let service: UploadsService;

  const mockCloudinaryService = {
    uploadFile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UploadsService,
        {
          provide: CloudinaryService,
          useValue: mockCloudinaryService,
        },
      ],
    }).compile();

    service = module.get<UploadsService>(UploadsService);

    jest.clearAllMocks();
  });

  it('should upload file', async () => {
    mockCloudinaryService.uploadFile.mockResolvedValue({
      public_id: 'abc123',
      secure_url: 'https://cloudinary.com/file.jpg',
    });

    const result = await service.uploadFile({
      buffer: Buffer.from('test'),
      originalname: 'file.jpg',
      mimetype: 'image/jpeg',
      size: 100,
    });

    expect(result.data.publicId).toBe('abc123');
  });
});
